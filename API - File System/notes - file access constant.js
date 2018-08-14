/*File Access Constants
The following constants are meant for use with fs.access().
Constant 	Description
F_OK 	Flag indicating that the file is visible to the calling process.
This is useful for determining if a file exists, but says nothing about rwx
permissions. Default if no mode is specified.
R_OK 	Flag indicating that the file can be read by the calling process.
W_OK 	Flag indicating that the file can be written by the calling process.
X_OK 	Flag indicating that the file can be executed by the calling process.
This has no effect on Windows (will behave like fs.constants.F_OK).
*/
