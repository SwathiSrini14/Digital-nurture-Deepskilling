import React from "react";

function BookDetails() {

    const showBooks = true;

    if (!showBooks) {
        return <h2>No Books Available</h2>;
    }

    const books = [
        "React Explained",
        "Java Complete Reference",
        "Python Programming"
    ];

    return (

        <div className="card">

            <h2>Book Details</h2>

            <ul>

                {books.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}

            </ul>

        </div>

    );

}

export default BookDetails;