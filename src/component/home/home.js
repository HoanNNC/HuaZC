import avt from '../../assets/img/img1.jpg';

function Home() {
    return(
        <div className="container-fluid bg-primary py-5 px-0" style={{marginBottom: '90px'}}>
        <div className="row mx-0 align-items-center">
            <div className="col-lg-6 px-md-5 text-center text-lg-left">
                <h1 className="display-2 text-uppercase mb-3">Full Stack Developer</h1>
                <p className="text-dark mb-4">Xin chào, mình là Hoan (199x) <br/>
                    Mình tốt nghiệp khoa công nghệ thông tin Đại Học Mở Hà Nội. <br/>
                    Hiện tại mình là lập trình viên.<br/>
                    Sở thích của mình là thích con gái 😝 &#128525;
                    </p>
                <a href="other" className="btn btn-dark text-uppercase mt-1 py-3 px-5">Learn More</a>
            </div>
            <div className="col-lg-6 px-0 text-right">
                <img className="img-fluid mt-5 mt-lg-0" src={avt} alt="avatar" />
            </div>
        </div>
        </div>
    )
}

export default Home;