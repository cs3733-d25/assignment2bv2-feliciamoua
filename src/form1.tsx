export default function Form1() {
    return (
        <div>
            <h3>Contact Me</h3>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" /><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" /><br /><br />

                <label>Favorite Genre:</label><br />
                <input type="radio" id="fiction" name="genre" value="Fiction" />
                <label htmlFor="fiction">Fiction</label><br />
                <input type="radio" id="fantasy" name="genre" value="Fantasy" />
                <label htmlFor="fantasy">Fantasy</label><br />
                <input type="radio" id="nonfiction" name="genre" value="Non-fiction" />
                <label htmlFor="nonfiction">Non-fiction</label><br /><br />

                <label>Preferred Reading Format:</label><br />
                <input type="checkbox" id="ebook" name="format" value="Ebook" />
                <label htmlFor="ebook">Ebook</label><br />
                <input type="checkbox" id="paperback" name="format" value="Paperback" />
                <label htmlFor="paperback">Paperback</label><br />
                <input type="checkbox" id="hardcover" name="format" value="Hardcover" />
                <label htmlFor="hardcover">Hardcover</label><br /><br />

                <label htmlFor="comments">Comments:</label><br />
                <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br /><br />

                <label htmlFor="author">Favorite Genre:</label>
                <select id="author" name="author">
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Non-fiction">Non-fiction</option>
                </select><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}