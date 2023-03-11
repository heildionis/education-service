export default class ApiError extends Error {
	status: number;
	errors: Array<any>;

	constructor (status: number, message: string, errors = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static badRequest(message: string, errors = []) {
		return new ApiError(400, message, errors);
	}

	static unauthorized(message: string, errors= []) {
		return new ApiError(401, message, errors);
	}

	static forbidden(message: string, errors = []) {
		return new ApiError(403, message, errors);
	}

	static notFound(message: string, errors = []) {
		return new ApiError(404, message, errors);
	}

	static notAcceptable(message: string, errors = []) {
		return new ApiError(406, message, errors);
	}

	static requestTimeout(message: string, errors = []) {
		return new ApiError(408, message, errors);
	}

	static conflict(message: string, errors = []) {
		return new ApiError(409, message, errors);
	}

	static locked(message: string, errors = []) {
		return new ApiError(423, message, errors);
	}
}
