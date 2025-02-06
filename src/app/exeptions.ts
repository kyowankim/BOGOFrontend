export class InvalidLocationError extends Error {
    constructor(message = "The location you've provided could not be found.") {
        super(message)
        this.name = "InvalidLocationError"
    }
}

export class ExcessRequestError extends Error {
    constructor(message = "Too many requests. Please wait before trying again.") {
        super(message)
        this.name = "ExcessRequestError"
    }
}

export class ServerError extends Error {
    constructor(message = "There's been a issue on the server.") {
        super(message)
        this.name = "ServerError"
    }
}