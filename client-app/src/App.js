import React from "react";
import "./App.css";
import { getMovies } from "./services/MovieServices";

function App() {
    return (
        <React.Fragment>
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">
                                    Add some information about the album below,
                                    the author, or any other background context.
                                    Make it a few sentences long so folks can
                                    pick up some informative tidbits. Then, link
                                    them off to some social networking sites or
                                    contact information.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="a" className="text-white">
                                            Follow on Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="a" className="text-white">
                                            Like on Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="a" className="text-white">
                                            Email me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a
                            href="a"
                            className="navbar-brand d-flex align-items-center"
                        >
                            <svg
                                width="2em"
                                height="2em"
                                viewBox="0 0 16 16"
                                className="bi bi-badge-hd mr-2 text-success"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
                                />
                                <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z" />
                            </svg>

                            <strong>Vidly</strong>
                        </a>
                        <button
                            className="navbar-toggler border-success"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarHeader"
                            aria-controls="navbarHeader"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon -success"></span>
                        </button>
                    </div>
                </div>
            </header>
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>
                            <svg
                                width="0.8em"
                                height="0.8em"
                                viewBox="0 0 16 16"
                                className="bi bi-star-fill mr-2 text-success"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            Trendy Movies
                        </h1>
                        <p className="lead text-muted">
                            Something short and leading about the collection
                            below—its contents, the creator, etc. Make it short
                            and sweet, but not too short so folks don’t simply
                            skip over it entirely.
                        </p>
                        <p>
                            <a href="a" className="btn btn-success mr-2">
                                Main call to action
                            </a>
                            <a href="a" className="btn btn-secondary my-2">
                                Secondary action
                            </a>
                        </p>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg
                                        className="bd-placeholder-img card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#55595c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#eceeef"
                                            dy=".3em"
                                        >
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                9 mins
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="a" className="text-success">Back to top</a>
                    </p>
                    <p>
                        Album example is &copy; Bootstrap, but please download
                        and customize it for yourself!
                    </p>
                    <p className="pb-5">
                        New to Bootstrap?{" "}
                        <a href="https://getbootstrap.com/">
                            Visit the homepage
                        </a>{" "}
                        or read our{" "}
                        <a href="../getting-started/introduction/">
                            getting started guide
                        </a>
                        .
                    </p>
                </div>
                <div className="text-center p-4 text-white bg-dark">
                    Copyright &copy; 2020 ... All rights reserved
                </div>
            </footer>
        </React.Fragment>
    );
}

export default App;
