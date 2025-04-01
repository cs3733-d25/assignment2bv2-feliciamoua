export function FormTwo(){
    return(
    <div>
        <h3>Skiing Form</h3>
        <form>
            <label htmlFor="timeSkiing">How Long Have You Been Skiing?</label>
            <input type="text" id="timeSkiing"/>
            <br/>
            <label htmlFor="skillLevel">What is your Skill Level in Skiing?</label>
            <input type="text" id="skillLevel"/>
            <br/>
            <p>What mountains have you skiied at?</p>
            <label htmlFor="Mt Snow">Mt Snow</label>
            <input type="checkbox" id="Mt Snow"/>
            <br/>
            <label htmlFor="Lake Placid">Lake Placid</label>
            <input type="checkbox" id="Lake Placid"/>
            <br/>
            <label htmlFor="Loon">Loon</label>
            <input type="checkbox" id="Loon"/>
            <br/>
            <p>Which of these are the coolest</p>
            <label htmlFor="SkiingCool">Skiing</label>
            <input type="radio" id="SkiingCool" name="coolest" value="skiing"/>
            <br/>
            <label htmlFor="SnowboardingCool">Snowboarding</label>
            <input type="radio" id="SnowboardingCool" name="coolest" value="snowboarding"/>
            <br/>
            <label htmlFor="SkateboardingCool">I hate the cold Skateboarding is the coolest</label>
            <input type="radio" id="SkateboardingCool" name="coolest" value="skateboarding"/>
            <br/>
            <br/>
            <label htmlFor="typeofHill">Whats Your Favorite Type of Mountain to go down</label>
            <select id="typeofHill">
                <option value="greenCircle">Green Circle</option>
                <option value="blueSquare">Blue Square</option>
                <option value="blackDiamond">Black Diamond</option>
                <option value="none">I don't like skiing at all</option>
            </select>
            <br/>
            <br/>
            <label htmlFor="comments">Any extra complaints you have about skiing?<br/></label>
            <textarea id="comments"></textarea>
            <br/>
            <br/>
            <label htmlFor="submits">If You're Done Please Submit Here:</label>
            <br/>
            <input type="button" id="submits" value="Submit"/>
            </form>
    </div>
    )
}
export default FormTwo;