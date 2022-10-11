const CreateForm = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-tittle">Create Player</h1>
                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="string"
                                className="form-control"
                                id="username"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="experience" className="form-label">
                                Experience
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="experience"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;
