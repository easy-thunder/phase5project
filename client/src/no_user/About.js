import fancyJake from "../assets/jake fancy.jpg"
import digitalTree from "../assets/digitalTreeGrowth.png"
import raftingJake from "../assets/raftingUnderBridge.jpg"
function About(){
    return(<div className="blackFadeToWhite fullHeight">
        <div className="topContainer red"  >

        <div className="contentRight">
        <img className="profileImageContent center" src={fancyJake} alt="jake at dinner Party" />
        </div>
        <div className="content">
            <h1 className="largerText">Meet the team!</h1>
            <p>It's just me! Hi, I'm Jake, a free-lance web developer. All my life I've been an over achiever. Whether it was setting records in sports, earning over fifty five star reviews, or making the deans list five times I always go above and beyond. I constantly push myself to learn new skills to implement in my clients sites. I'm excited to cultivate the ultimate user experience into your new website!  </p>
        </div>



</div>
<div className="width50 marginLeftMore">

<h1 className=" largerText  blackText">How I can Cultivate your digital network!</h1>
</div>
<div className="topContainer green noEffect">
<div></div>
<div className="contentLeft  height50 solid">
                <div className="divForSideScroll largerText blue">
                    <p className="sideCenter ">
                    Automatic email generation for marketing and reminding your clients that you exist!
                    </p>
                    </div>
                <div className="divForSideScroll largerText gray">
                    <p className="sideCenter ">
                        live chat sessions to have immediate chat sessions with your clients and trouble shoot problems efficiently!
                        </p>
                    </div>
                <div className="divForSideScroll largerText red">
                    <p className="sideCenter ">
                    Build your Digital Store and Implement Secure and dynamic payment systems with stripe!
                    </p>
                    </div>
                <div className="divForSideScroll largerText yellow">
                <p className="sideCenter ">
                    Give you an admin section allowing the view of customer data and ability to add your own content! </p>
                    </div>
                <div className="divForSideScroll largerText green">
                <p className="sideCenter ">
                    Manage your Server freeing you to do your business!</p>
                    </div>
                <div className="divForSideScroll largerText violet">
                <p className="sideCenter ">
                    Site security to protect your clients from sequel injections and malware!</p>
                    </div>
                <div className="divForSideScroll largerText orange">
                <p className="sideCenter ">
                    Automatic session login or have the ultimate security of securely signing in with social-media API's</p>
                    </div>
                <div className="divForSideScroll largerText pink">
                <p className="sideCenter ">2d interactive animations that will engage your clients and keep them coming back!</p></div>
                <div className="divForSideScroll blue largerText">
                <p className="sideCenter ">
                    Give your users the ability to add audio, GIFS, video, and images to your site! </p></div>

                <div className="divForSideScroll red largerText">
                <p className="sideCenter ">
                    Make Logos, clip-art, and images through AI art generation!</p></div>
            
                <div className="divForSideScroll yellow largerText">
                <p className="sideCenter ">
                    I continue to grow. Soon I will be able to implement 3d renders, and am working with AWS!</p></div>
         <form>
            <input type='' />
         </form>

                </div>
        <div className="contentRight">
            <img className="profileImageContent center" src={digitalTree} />
        </div>
        </div>
        <div className="topContainer blue"  >

<div className="contentRight">
<img className=" center" src={raftingJake} alt="jake at dinner Party" />
</div>
<div className="content">
    <h1 className="largerText">History and hobbies</h1>
    <p>Biologist turned software engineer! I enjoy learning about the interactions in our psychoneuroendocrinology almost as much as I enjoy displaying my creativity through websites!  </p>
    <br />
    <p> I am a white water rafting guide which is where I earned over 50 five star reviews. I enjoy people and know that connection with others yields oxytocin release, the happiest currency our bodies can naturally produce!  </p>
    <br />
    <p>When I'm not rafting, working, or developing side projects I enjoy board game nights with family and friends!</p>
</div>



</div>

    </div>)
}


export default About