// import React from "react";
import Menubar from "./../components/Munubar";
import Footer from "@/components/Footer";
import Menuitem from "@/components/Menuitem";
import Link from "next/link";

interface CardData {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
}

export default function layout() {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "[Pantip Point]",
      content: "ชวนแชร์ภาพความสดชื่อต้อนรับ Summer",
      image: "https://f.ptcdn.info/698/083/000/sb8nojg2zmes5sEMzKkF-o.png",
      link: "https://pantip.com/topic/42616095",
    },
    {
      id: 2,
      title: "",
      content: "ชวนรีวิวไบโอเดอร์มา ซีเบี่ยม เซรั่ม ลุ้นรางวัลใหญ่",
      image: "https://f.ptcdn.info/572/083/000/sala2p1of39GnOZdafx39-o.png",
      link: "",
    },
    {
      id: 4,
      title: "พี่แป้งชวนมาแชร์",
      content: "“บิวตี้ไอเทมคลายร้อน ” ลุ้นรับ Pantip",
      image: "https://f.ptcdn.info/743/083/000/sbgm2p121kbbWkEQD1v0y-o.png",
      link: "",
    },
    {
      id: 4,
      title: "พี่แป้งชวนมาแชร์",
      content: "“บิวตี้ไอเทมคลายร้อน ” ลุ้นรับ Pantip",
      image: "https://f.ptcdn.info/731/083/000/sbefpewx609PBLllir43-o.jpg",
      link: "",
    },
  ];

  const cardPantipRealtime: CardData[] = [
    {
      id: 1,
      title: "[BR] ทำกิจกรรมร่วมกับ Pantip Happy Prize ดีขนาดไหน มาดูกัน",
      content: "Pantip Happy Prize",
      image: "",
      link: "",
    },
    {
      id: 2,
      title: "วันนี้ญาติๆพาผมกับแม่ไปกินอาหารทะเลที่ชะอำมาครับ",
      content: "Pacharapon",
      image: "",
      link: "",
    },
    {
      id: 3,
      title: "ใช้ชื่อพี่ชายซื้อรถ พอผ่อนรถหมด พี่สะใภ้มาทวงเอารถ",
      content: "สมาชิกหมายเลข 8083027",
      image: "",
      link: "",
    },
    {
      id: 4,
      title: "ลิซ่า ที่งาน COACHELLA วันแรก",
      content: "สมาชิกหมายเลข 6890503",
      image: "",
      link: "",
    },
    {
      id: 5,
      title:
        "เมืองรอง จังหวัดโซนเหนือล่าง กลางบน จังหวัดที่คนเที่ยวน้อยที่สุด และ มากที่สุดครับ",
      content: "สมาชิกหมายเลข 6582822",
      image: "",
      link: "",
    },
    {
      id: 6,
      title:
        "BYD เปิดตัวแบตเตอรี่ รถยนต์ EV รุ่นใหม่ ราคาถูก วิ่งไกล 1000 กม. แบบนี้น่าสนใจมากครับ",
      content: "สมาชิกหมายเลข 8040718",
      image: "",
      link: "",
    },
  ];
  const cardPantipPick: CardData[] = [
    {
      id: 1,
      title:
        " กิจกรรม “แนะวิธีคลายร้อน ต้อนรับซัมเมอร์สุดฮอต” 🏖 ตอบถูกใจทีมงานรับ Pantip point 50 คะแนน จำนวนรวม 15 รางวัล",
      content: "The Tech Unicorn",
      image: "",
      link: "",
    },
    {
      id: 2,
      title:
        "พื่อนๆมองการเกษียณกันไว้ที่อายุเท่าไรคะ และเตรียมตัวยังไงบ้างคะ กรณีไม่มีลูกค่ะชีวิตหลังเกษียณอาชีพหลังเกษียณสังคมผู้สูงอายุ",
      content: "สมาชิกหมายเลข 7224183",
      image: "",
      link: "",
    },
    {
      id: 3,
      title:
        "[CR]  I Left my heart at Taiwan ไต้หวัน Solo ฉบับคนหลงรัก น้ำ ฟ้า ป่า เขาเที่ยวไต้หวันBackpackเที่ยวต่างประเทศบันทึกนักเดินทางไต้หวัน",
      content: "แมวมาหา หมามาสู่",
      image: "",
      link: "",
    },
    {
      id: 4,
      title:
        "เบคอน -สันคอหมูสไลด์ ผัดเทอริยากิ ใส่ไข่, เต้าหูดอยทอด กับแกงส้มใส่เบคอน-เต้าหู้อ่อน ใส่ไข่ อาหารพื้นบ้านวัตถุดิบทำอาหารอาหารคลีนทำอาหารเคล็ดลับก้นครัว",
      content: "กานต์(วีระพัฒน์)",
      image: "",
      link: "",
    },
    {
      id: 5,
      title:
        "ผมได้รายได้พิเศษ มาแต่ไม่บอกแฟน ผิดไหมครับมนุษย์เงินเดือนการเงินประสบการณ์ชีวิตคู่พนักงานประจำปัญหาชีวิต",
      content: "สมาชิกหมายเลข 6582822",
      image: "",
      link: "",
    },
    {
      id: 6,
      title:
        "เลิกกับแฟนเก่าถ้ามีคนใหม่แมวรู้สึกแย่ไหมคะแมวสัตว์เลี้ยงปัญหาความรัก",
      content: "สมาชิกหมายเลข 8040718",
      image: "",
      link: "",
    },
  ];
  return (
    <div>
      <Menubar />
      <br />
      <br />
      <br />
      <Menuitem />
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <link href="path/to/bootstrap.min.css" rel="stylesheet"></link>
      <script src="path/to/bootstrap.min.js"></script>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="col-12 py-5">
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "purple" }}>
            Highlight
          </p>
          <div className="row" style={{ justifyContent: "start" }}>
            {cardData.map((card) => (
              <div className="col-2 container" key={card.id}>
                <div
                  className="card shadow mb-5 bg-body rounded "
                  style={{
                    height: "250px",
                    width: "200px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt="Card image"
                  />
                  <Link rel="stylesheet" href={card.link} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="col-12 py-2">
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "purple" }}>
            Pantip Realtime
          </p>
          <div className="row">
            {cardPantipRealtime.map((card) => (
              <div className="col-6 py-2" key={card.id}>
                <div
                  className="card shadow p-2 mb-2 bg-body rounded"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-dark">Show more</button>
        </div>
        <hr />
        <div className="col-12 py-2">
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "purple" }}>
            Pantip Pick
          </p>
          <div className="row">
            {cardPantipPick.map((card) => (
              <div className="col-12 py-2" key={card.id}>
                <div
                  className="card shadow p-2 mb-2 bg-body rounded"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-dark">Show more</button>
        </div>
        <hr />
        <div className="col-12 py-4">
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "purple" }}>
            Pantip Hitz
          </p>
          <div className="row">
            {cardData.map((card) => (
              <div className="col-12 py-2" key={card.id}>
                <div
                  className="card shadow p-2 mb-2 bg-body rounded"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-dark">Show more</button>
        </div>
        <hr />
        <div className="col-12 py-4">
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "purple" }}>
            การ์ตูน
          </p>
          <div className="row">
            {cardData.map((card) => (
              <div className="col-12 py-2" key={card.id}>
                <div
                  className="card shadow p-2 mb-2 bg-body rounded"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-dark">Show more</button>
        </div>
        <hr />
        <div className="col-12 py-4">
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "purple" }}>
            ซิลิคอนวัลเลย์
          </p>
          <div className="row">
            {cardData.map((card) => (
              <div className="col-12 py-2" key={card.id}>
                <div
                  className="card shadow p-2 mb-2 bg-body rounded"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-dark">Show more</button>
        </div>
        <hr />
        <div className="col-12 py-4">
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "purple" }}>
            สินธร
          </p>
          <div className="row">
            {cardData.map((card) => (
              <div className="col-12 py-2" key={card.id}>
                <div
                  className="card shadow p-2 mb-2 bg-body rounded"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-dark">Show more</button>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <Footer />
      </div>
     
    </div>
  );
}
