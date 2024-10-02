
const ContactUs = ()=>{
    return (
        <div className="body">
            <h1 className="text-lg font-bold text-center">Contact Us</h1>
            <form className="w-1/3 mx-auto">
                <input type="text" placeholder="Name" className=" w-full border border-black p-2 my-2 rounded-lg"></input>
                <br></br>
                <textarea type="text" placeholder="Message" rows={3} className="w-full border p-2 my-2 border-black rounded-lg"></textarea>
                <br></br>
                <button className="w-full border border-black p-2 rounded-lg bg-blue-200 hover:font-semibold hover:bg-blue-400">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;

