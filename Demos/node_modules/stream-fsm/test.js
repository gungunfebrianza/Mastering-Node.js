var test = require('tap').test,
    fsm = require('./'),
    fs = require('fs');

test("test want (string)", function(t) {
  var count = 0;
  var res = '';
  var fn = fsm.want(4, function(data) {
    console.log(arguments);
    count++;
    res+=data;
  });

  t.equal(fn('1'), false, '1/4');
  t.equal(fn('12'), false, '2/4');
  t.equal(fn('123'), false, '3/4');
  t.equal(fn('1234'), 4, '4/4'); // consumed 4 bytes

  t.equal(count, 1);
  t.equal(res, '1234');
  t.end();
});


test("test want (buffer)", function(t) {
  var count = 0;
  var res;
  var fn = fsm.want(4, function(data) {
    console.log(arguments);
    count++;
    res = data;
  });

  t.equal(fn(new Buffer([1])), false);
  t.equal(fn(new Buffer([1,2])), false);
  t.equal(fn(new Buffer([1,2,3])), false);
  t.equal(fn(new Buffer([1,2,3,4])), 4); // consumed 4 bytes

  t.equal(count, 1);

  t.equal(res[0], 1);
  t.equal(res[1], 2);
  t.equal(res[2], 3);
  t.equal(res[3], 4);

  t.end();
});

test('calculated want', function(t) {
  var out = [], total, length = 0;
  var stream = fsm({
    header : fsm.want(1, function(data) {
      total = parseInt(data, 10);
      this.change('entry_header');
    }),
    entry_header : fsm.want(1, function(data) {
      length = parseInt(data, 10);
      this.change('entry');
    }),
    entry : function(data) {
      return fsm.want(length, function(val) {
        out.push(val);
        total--;
        if (total <= 0) {
          this.done();
        } else {
          this.change('entry_header');
          return val.length;
        }
      });
    }
  }, function() {
    t.equal(out.length, 3);
    t.equal(out[0], 'hello');
    t.equal(out[1], 'world');
    t.equal(out[2], 'goodbye');
    t.end();
  });

  stream.write("35hello5world7goodbye");

});

test('state change', function(t) {
  var out = {
    start: null,
    next : null,
    last : null
  };

  var stream = fsm({
    start : fsm.want(5, function(data) {
      out.start = data;
      this.change('next');
    }),
    next : fsm.want(4, function(data) {
      out.next = data;
      this.change('last');
    }),
    last : fsm.want(4, function(data) {
      out.last = data;
      this.done();
    })
  }, function() {
    t.equal(out.start, 'start');
    t.equal(out.next, 'next');
    t.equal(out.last, 'last');
    t.end();
  });

  stream.write('startnextlast');
});

test('queue', function(t) {

  var count = 0;
  var stream = fsm({
    init : fsm.want(1, function(data) {
      count += data.length;
      this.change('next');
    }),
    next : fsm.want(1, function(data) {
      count += data.length;
      this.change('init');
    })
  });

  stream.on('end', function() {
    fs.stat(__filename, function(err, stats) {
      t.equal(stats.size, count);
      t.end();
    })
  });

  fs.createReadStream(__filename).pipe(stream);
});

test('want loop', function(t) {

  var count = 0;
  var str = '';
  var stream = fsm({
    init : fsm.want(5, function(data) {
      str = data.toString();
      this.done();
    })
  }, function() {
    t.equal(str, 'hello');
    t.end();
  });

  var send = 'hello'.split('');
  setTimeout(function tick() {
    stream.write(send.shift());
    if (send.length) {
      setTimeout(tick, 10);
    }
  }, 100);
});

test('want peek', function(t) {

  var count = 0;
  var str = '';
  var stream = fsm({
    init : fsm.want(5, function(data) {
      this.change('consume');
      return 0; // just peeking at the data..
    }),
    consume : fsm.want(5, function(data) {
      t.equal(data, 'hello');
      this.done();
    })
  }, function() {
    t.end();
  });


  var send = 'hello'.split('');
  setTimeout(function tick() {
    stream.write(send.shift());
    if (send.length) {
      setTimeout(tick, 10);
    }
  }, 100);
});

test('run to completion', function(t) {

  var count = 0;
  var str = '';
  var want = ['22', '33'];
  var stream = fsm({
    init : fsm.want(1, function(d) {
      this.change('next');
    }),
    next : fsm.want(2, function(d) {
      t.equal(d, want.shift());
      count+=d.length;
    })
  }, function() {

  });

  stream.write('12');
  process.nextTick(function() {
    stream.write('233');
    t.equal(count, 4);
    stream.end();
    t.end();
  });
});


// Allow a user to get at the queued data
test('stream#cache - string', function(t) {
  var stream = fsm({
    init : fsm.want(10, function(d) {
      this.done();
    })
  });

  var string = '12345678';
  stream.write(string);
  t.equal(stream.fsm.cache(), string)
  t.end();
});

// Allow a user to get at the queued data
test('stream#cache - string', function(t) {
  var stream = fsm({
    init : fsm.want(10, function(d) {
      this.change('another');
    }),
    another : function(d) { return d.length; }
  });

  var string = '12345678';
  stream.write(string);
  t.equal(stream.fsm.mode(), 'init')

  stream.write(string);
  t.equal(stream.fsm.mode(), 'another')

  t.end();
});
