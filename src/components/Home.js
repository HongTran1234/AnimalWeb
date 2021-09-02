import React, { Component } from 'react'
class Home extends Component {
    constructor(props) {
        super(props);

    }
    renderList() {
        const Login = localStorage.getItem("Login")
        if (Login == "true") {
            const animals = [
                {
                    id: 1,
                    title: "Lios",
                    detail: "The king of the jungleis on everyone’s must-see list. Simba and his family live in the grasslands and savannahs of sub-Saharan Africa. Head to Tanzania, Kenya, Botswana, or South Africa to see these majestic creatures.",
                    type: "Mammal",
                    img: "Cecil_the_lion_at_Hwange_National_Park_(4516560206).jpg"
                },
                {
                    id: 2,
                    title: "Emus",
                    detail: "Endemic to Australia, emus (Dromaius novaehollandiae) are the second tallest living birds in the world that can reach up to 190 cm tall. They weigh an average of 33 kg. Female emus are usually slightly larger than the males and have significantly wider rumps.",
                    type: "Bird",
                    img: "emperor-penguins.jpg"
                },
                {
                    id: 3,
                    title: "Lios",
                    detail: "The king of the jungleis on everyone’s must-see list. Simba and his family live in the grasslands and savannahs of sub-Saharan Africa. Head to Tanzania, Kenya, Botswana, or South Africa to see these majestic creatures.",
                    type: "wild animals",
                    img: "Cecil_the_lion_at_Hwange_National_Park_(4516560206).jpg"
                },
                {
                    id: 4,
                    title: "Lios",
                    detail: "The king of the jungleis on everyone’s must-see list. Simba and his family live in the grasslands and savannahs of sub-Saharan Africa. Head to Tanzania, Kenya, Botswana, or South Africa to see these majestic creatures.",
                    type: "wild animals",
                    img: "Cecil_the_lion_at_Hwange_National_Park_(4516560206).jpg"

                },
                {
                    id: 5,
                    title: "Emus",
                    detail: "Endemic to Australia, emus (Dromaius novaehollandiae) are the second tallest living birds in the world that can reach up to 190 cm tall. They weigh an average of 33 kg. Female emus are usually slightly larger than the males and have significantly wider rumps.",
                    type: "Bird",
                    img: "emperor-penguins.jpg"
                },
                {
                    id: 6,
                    title: "Lios",
                    detail: "The king of the jungleis on everyone’s must-see list. Simba and his family live in the grasslands and savannahs of sub-Saharan Africa. Head to Tanzania, Kenya, Botswana, or South Africa to see these majestic creatures.",
                    type: "wild animals",
                    img: "Cecil_the_lion_at_Hwange_National_Park_(4516560206).jpg"

                },
            ]
            const animalList = animals.map(obj => (
                < li >
                    <img src={`./animal/image/` + obj.img} alt="" />
                    <div className="text-animal">
                        <h3>{obj.title}</h3>
                        <p>{obj.type}</p>
                        <p>{obj.detail} </p>
                    </div>
                </li >

            ))
            return <div>{animalList}</div>


        }
        else {
            return (
                <p className="ples-login">Please login to view information</p>
            )
        }

    }
    render() {
        return (
            <div>
                <div className="cover-image">
                    <div className="image-text">
                        <p>Welcome To Our Page!</p>
                        <h1>Basic Types of Animals </h1>
                        <button>TELL ME MORE</button>
                    </div>
                </div>
                <div className="list-animal">
                    <div className="list-animal-detail">
                        <h1>Animals In The World</h1>
                        <ul className="list-animal-show">
                            {this.renderList()}
                        </ul>
                    </div>
                </div>


            </div>
        );
    }
}
export default Home