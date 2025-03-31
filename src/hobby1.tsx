import List1 from './list1.tsx'
import Table1 from './table1.tsx'
import Form1 from './form1.tsx'

export function Hobby1() {
    return (
        <section>
            <h2>Felicia's Hobby: Reading</h2>
            <img src ="/public/bookbanner.webp" alt="Banner of books" width="640" />
            <p>Reading is one of my favorite pastimes. I love diving into novels, exploring different genres, and discovering new authors.</p>
            <List1 />
            <Table1 />
            <Form1 />
        </section>
    );
}