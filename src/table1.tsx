export default function Table1() {
    return (
        <div>
            <h3>Book Recommendations</h3>
            <table className="collapse">
                <caption>Favorite Books by Genre</caption>
                <thead>
                <tr>
                    <th>Genre</th>
                    <th>Book Title</th>
                    <th>Author</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Historical Fiction</td>
                    <td>The Nightingale</td>
                    <td>Kristin Hannah</td>
                </tr>
                <tr>
                    <td>Fantasy Fiction</td>
                    <td>Heartless</td>
                    <td>Marissa Meyer</td>
                </tr>
                <tr>
                    <td>Mystery</td>
                    <td>Gone Girl</td>
                    <td>Gillian Flynn</td>
                </tr>
                <tr>
                    <td>Non-fiction</td>
                    <td>Educated</td>
                    <td>Tara Westover</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}