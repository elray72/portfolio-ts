require('dotenv').config();
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
	user: process.env.FTP_USER, // NOTE that this was username in 1.x
	password: process.env.FTP_PWD, // optional, prompted if none given
	host: process.env.FTP_HOST,
	port: process.env.FTP_PORT,
	localRoot: __dirname + '/build',
	remoteRoot: process.env.FTP_REMOTE_ROOT,
	// include: ['*', '**/*'],      // this would upload everything except dot files
	include: ['**/*'],
	exclude: [], // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
	deleteRemote: false, // delete ALL existing files at destination before uploading, if true
	forcePasv: true, // Passive mode is forced (EPSV command is not sent)
};

// Deploy
ftpDeploy
	.deploy(config)
	.then((res) => console.log('Finished:', res))
	.catch((err) => console.log(err));
