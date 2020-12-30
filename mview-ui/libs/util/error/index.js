import log from '../log';
class Error {
	static errorHandler(res, msg) {
		log.err(msg, JSON.stringify(res));
	}
}
export default Error;
