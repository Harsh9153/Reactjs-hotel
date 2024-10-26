
import { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom"
import "./RoomList.css"


function RoomList() {
    let [data, setData] = useState({});
    let [list, setList] = useState([]);
    let [image, setImage] = useState(null);
    let [background, setBackground] = useState(null);
    let [errors, setErrors] = useState({});
    let [view, setView] = useState(["2D", "3D", "2D/3D"])
    let [langs, setLangs] = useState([]);
    let [genres, setGenres] = useState([]);


    useEffect(() => {

    }, [setList])
    let changeInput = (e) => {
        let { name, value } = e.target;


        if (name == "image-background") {
            // console.log("hii");

            let file = e.target.files[0];
            let render = new FileReader();

            render.onload = () => {
                let image_render = render.result;
                setImage(image_render)
            }
            if (file) {
                render.readAsDataURL(file)
            }

        }

        if (name == "image") {
            // console.log("hii");

            let file = e.target.files[0];
            let render = new FileReader();

            render.onload = () => {
                let image_render = render.result;
                setBackground(image_render)
            }
            if (file) {
                render.readAsDataURL(file)
            }
        }
        let langeData = [...langs];

        if (name == "language") {

            if (e.target.checked) {
                langeData.push(value);
            } else {
                let index = langeData.findIndex((v, i) => v == value);
                langeData.splice(index, 1)
            }
            value = langeData;

            setLangs(value)
        }
        let generdata = [...genres];


        if (name == "genre") {

            if (e.target.checked) {
                generdata.push(value);
            } else {
                let index = langeData.findIndex((v, i) => v == value);
                generdata.splice(index, 1)
            }
            value = generdata

            setGenres(value)
        }

        setData({ ...data, [name]: value })


    }
    // console.log(langs);
    // console.log(genres);

    // console.log(data);

    let submitData = (e) => {
        e.preventDefault();
        // let valiErrors = validate();

        data = { ...data, image: image };
        data = { ...data, background: background };
        Axios.post("http://localhost:5000/roomList/", data)
            .then((res) => {
                setData(res.data)

                setData({})
                setImage(null)
                setBackground(null)

            })
            .catch((err) => {
                console.log(err);
                alert("something wrong")
            });

        // if (Object.keys(valiErrors).length > 0) {
        //     setErrors(valiErrors)
        //     return
        // }  
        setLangs([])
        setGenres([])

    }
    return (
        <>
            <div className="hrrr">
                <div className="containerr">
                    <form action="" method="post" onSubmit={(e) => submitData(e)} className="hrr">
                        <h2>RoomList</h2>
                        <div className="content">

                            <div className="input-box">
                                <label for="Movies name">Room Name</label>
                                <br /><br />
                                <input type="text" placeholder="Enter room name" value={data.room_name ? data.room_name : ""} onChange={(e) => changeInput(e)} name="room_name" />
                            </div>
                            <div className="input-box">
                                <label for="Title">Title</label>
                                <br /><br />
                                <input type="text" placeholder="Enter Title" onChange={(e) => changeInput(e)} value={data.title ? data.title : ""} name="title" />
                            </div>
                            <div className="input-box">
                                <label for="price">Price</label>
                                <br /><br />
                                <input type="number" placeholder="Enter price" onChange={(e) => changeInput(e)} value={data.price ? data.price : ""} name="price" />
                            </div>

                            <div className="input-box">
                                <label for="view">Image</label>
                                <br /><br />
                                <input type="file" name="image-background" onChange={(e) => changeInput(e)} id="" /><img src={image} alt="" height='100' />
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit">Add all details</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default RoomList;