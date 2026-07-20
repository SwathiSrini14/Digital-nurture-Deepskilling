function BookDetails() {

    const showBooks = true;

    if (!showBooks) {
        return <h2>No Books Available</h2>;
    }

    return (
        <div>
            <h2>Book Details</h2>

            <ul>
                <li>React Explained</li>
                <li>Java Complete Reference</li>
                <li>Python Programming</li>
            </ul>
        </div>
    );
}

export default BookDetails;