import React from "react";

function GuestPage() {

    return (

        <div className="card">

            <h2>Welcome Guest</h2>

            <h3>Flight Details</h3>

            <table>

                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹4500</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                        <td>₹5200</td>
                    </tr>

                </tbody>

            </table>

            <p>Please Login to Book Tickets.</p>

        </div>

    );

}

export default GuestPage;