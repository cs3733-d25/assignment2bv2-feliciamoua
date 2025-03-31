type IntroProps = {
    nameOne: string;
    nameTwo: string;
};

export function Intro({nameOne, nameTwo}: IntroProps) {
    return (
        <p>Hello! We're {nameOne} and {nameTwo}, and we're excited to share our hobbies with you!</p>
    );
}

export default Intro;