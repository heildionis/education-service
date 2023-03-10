export default class ApiError extends Error {
	status: number;
	errors: any;

	constructor (status: number, message: string, errors = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static badRequest(message: string, errors = []) {
		return new ApiError(400, `ERROR: bad request ${message}`, errors);
	}

	static unauthorized() {
		return new ApiError(401, 'User unauthorized');
	}
}