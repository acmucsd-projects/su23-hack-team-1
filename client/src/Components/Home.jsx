import React from 'react'
import Navbar from "./navbar.jsx";
import "./home.css";

const productData = [
    {
      name: "Apples",
      category: "Fruits",
      location: "Pantry",
      purchasedate: "12/12/2022",
      expirydate: "12/12/2023",
      amount: "2 apples",
    },
    {
      name: "Oranges",
      category: "Fruits",
      location: "Pantry",
      purchasedate: "12/12/2022",
      expirydate: "10/10/2023",
      amount: "2 oranges",
    },
    {
      name: "Lettuce",
      category: "Vegetables",
      location: "Pantry",
      purchasedate: "10/7/2022",
      expirydate: "10/14/2023",
      amount: "1 lb",
    },
    {
      name: "Eggs",
      category: "Poultry",
      location: "Fridge",
      purchasedate: "12/12/2022",
      expirydate: "10/9/2023",
      amount: "2 cartons",
    },
    {
      name: "Chicken",
      category: "Meat",
      location: "Deep Fridge",
      purchasedate: "12/12/2022",
      expirydate: "10/07/2023",
      amount: "2 lb",
    },
    {
      name: "Mushroom",
      category: "Vegetables",
      location: "Fridge",
      purchasedate: "12/12/2022",
      expirydate: "10/12/2023",
      amount: "1 lb",
    },
    {
      name: "Salmon",
      category: "Meat",
      location: "Deep Fridge",
      purchasedate: "12/12/2022",
      expirydate: "10/19/2023",
      amount: "8 oz.",
    },
    {
      name: "Milk",
      category: "Dairy",
      location: "Fridge",
      purchasedate: "12/12/2022",
      expirydate: "10/8/2023",
      amount: "2 cartons",
    },
    {
      name: "Halibut",
      category: "Meat",
      location: "Deep Fridge",
      purchasedate: "12/12/2022",
      expirydate: "9/21/2023",
      amount: "1 lb",
    },
    {
      name: "Milk",
      category: "Dairy",
      location: "Fridge",
      purchasedate: "12/12/2022",
      expirydate: "9/30/2023",
      amount: "1 carton",
    },
    {
      name: "Bread",
      category: "Grain",
      location: "Pantry",
      purchasedate: "12/12/2022",
      expirydate: "9/30/2023",
      amount: "finished",
    },
    {
      name: "Wontons",
      category: "Meat",
      location: "Deep Fridge",
      purchasedate: "12/12/2022",
      expirydate: "9/21/2023",
      amount: "finished",
    },
    {
      name: "Cheese",
      category: "Dairy",
      location: "Fridge",
      purchasedate: "12/12/2022",
      expirydate: "9/29/2023",
      amount: "2 oz.",
    },
    {
      name: "Cereal",
      category: "Grain",
      location: "Pantry",
      purchasedate: "12/12/2022",
      expirydate: "9/30/2023",
      amount: "1 box",
    },
  ];
function Home(){
    const currDate = new Date();

    const aboutToExpire = new Date();
    aboutToExpire.setDate(currDate.getDate() + 14);

    const calculateDaysUntilExpiration = (expirationDate) => {
        const diffMilliseconds = new Date(expirationDate) - currDate;
        const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
        return diffDays;
      };


    return(
        <div>

        <div>
        <Navbar></Navbar>
        </div>

        <h2 className = "section-title">About To Expire</h2>

        <div className="view-container">
        
        {productData.filter(product => new Date(product.expirydate) < aboutToExpire && new Date(product.expirydate) > currDate).map((purchase, index) => {
            const daysExpiry = calculateDaysUntilExpiration(purchase.expirydate);
            return (
            <div className="view-item">

                <div className="item-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="57" viewBox="0 0 59 57" fill="none">
                        <path d="M28.5413 10.2066C27.188 9.06327 25.6413 8.15343 23.9688 7.51686C21.2769 6.44811 19.2856 6.51936 18.0688 7.69499C15.3769 10.2956 19.1566 16.2984 20.6684 17.7591C21.8273 18.8032 23.2423 19.5449 24.78 19.9144C25.383 20.0616 26.0019 20.1394 26.6238 20.1459C27.1945 20.1703 27.7645 20.0836 28.2998 19.8908C28.8351 19.698 29.3248 19.4031 29.7397 19.0237C32.1919 16.7616 30.6063 12.2194 28.5413 10.2066Z" fill="#91924C"/>
                        <path d="M29.5 21.375C29.011 21.375 28.542 21.1873 28.1963 20.8533C27.8505 20.5192 27.6562 20.0662 27.6562 19.5938C27.6562 13.6088 30.9012 8.90625 35.0312 8.90625C35.5202 8.90625 35.9892 9.09392 36.335 9.42797C36.6807 9.76202 36.875 10.2151 36.875 10.6875C36.875 11.1599 36.6807 11.613 36.335 11.947C35.9892 12.2811 35.5202 12.4688 35.0312 12.4688C33.2981 12.4688 31.3438 15.5147 31.3438 19.5938C31.3438 20.0662 31.1495 20.5192 30.8037 20.8533C30.458 21.1873 29.989 21.375 29.5 21.375Z" fill="#797A34"/>
                        <path d="M29.5 49.875C38.6645 49.875 46.0938 42.6975 46.0938 33.8437C46.0938 24.9899 38.6645 17.8125 29.5 17.8125C20.3355 17.8125 12.9062 24.9899 12.9062 33.8437C12.9062 42.6975 20.3355 49.875 29.5 49.875Z" fill="#ED7B09"/>
                        <path d="M29.5 44.5312C29.011 44.5312 28.542 44.3436 28.1963 44.0095C27.8505 43.6755 27.6562 43.2224 27.6562 42.75V40.9688C27.6562 40.4963 27.8505 40.0433 28.1963 39.7092C28.542 39.3752 29.011 39.1875 29.5 39.1875C29.989 39.1875 30.458 39.3752 30.8037 39.7092C31.1495 40.0433 31.3438 40.4963 31.3438 40.9688V42.75C31.3438 43.2224 31.1495 43.6755 30.8037 44.0095C30.458 44.3436 29.989 44.5312 29.5 44.5312Z" fill="#AC3A14"/>
                        <path d="M23.9688 40.9687C23.4798 40.9687 23.0108 40.7811 22.665 40.447C22.3193 40.113 22.125 39.6599 22.125 39.1875V37.4062C22.125 36.9338 22.3193 36.4807 22.665 36.1467C23.0108 35.8127 23.4798 35.625 23.9688 35.625C24.4577 35.625 24.9267 35.8127 25.2725 36.1467C25.6182 36.4807 25.8125 36.9338 25.8125 37.4062V39.1875C25.8125 39.6599 25.6182 40.113 25.2725 40.447C24.9267 40.7811 24.4577 40.9687 23.9688 40.9687Z" fill="#AC3A14"/>
                        <path d="M35.0312 40.9687C34.5423 40.9687 34.0733 40.7811 33.7275 40.447C33.3818 40.113 33.1875 39.6599 33.1875 39.1875V37.4062C33.1875 36.9338 33.3818 36.4807 33.7275 36.1467C34.0733 35.8127 34.5423 35.625 35.0312 35.625C35.5202 35.625 35.9892 35.8127 36.335 36.1467C36.6807 36.4807 36.875 36.9338 36.875 37.4062V39.1875C36.875 39.6599 36.6807 40.113 36.335 40.447C35.9892 40.7811 35.5202 40.9687 35.0312 40.9687Z" fill="#AC3A14"/>
                    </svg>
                    <p className="item-title">{purchase.name}</p>
                </div>

                <p className="item-subtitle">expires in {daysExpiry} days</p>

                <p className="item-text">{purchase.amount} | {purchase.location}</p>
                
            </div>
            );
      })}

        </div>

        <h2 className = "section-title">Expired!</h2>

        <div className="view-container">

        {productData.filter(product => new Date(product.expirydate) < currDate).map((purchase, index) => {
            return (
            <div className="view-item" style={{ border: '4px solid #EA8888' }}>

                <div className="item-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="57" viewBox="0 0 59 57" fill="none">
                <path d="M28.5413 10.2066C27.188 9.06327 25.6413 8.15343 23.9688 7.51686C21.2769 6.44811 19.2856 6.51936 18.0688 7.69499C15.3769 10.2956 19.1566 16.2984 20.6684 17.7591C21.8273 18.8032 23.2423 19.5449 24.78 19.9144C25.383 20.0616 26.0019 20.1394 26.6237 20.1459C27.1945 20.1703 27.7645 20.0836 28.2998 19.8908C28.8351 19.698 29.3248 19.4031 29.7397 19.0237C32.1919 16.7616 30.6062 12.2194 28.5413 10.2066Z" fill="#91924C"/>
                <path d="M29.5 21.375C29.011 21.375 28.542 21.1873 28.1963 20.8533C27.8505 20.5192 27.6562 20.0662 27.6562 19.5938C27.6562 13.6088 30.9012 8.90625 35.0312 8.90625C35.5202 8.90625 35.9892 9.09392 36.335 9.42797C36.6807 9.76202 36.875 10.2151 36.875 10.6875C36.875 11.1599 36.6807 11.613 36.335 11.947C35.9892 12.2811 35.5202 12.4688 35.0312 12.4688C33.2981 12.4688 31.3438 15.5147 31.3438 19.5938C31.3438 20.0662 31.1495 20.5192 30.8037 20.8533C30.458 21.1873 29.989 21.375 29.5 21.375Z" fill="#797A34"/>
                <path d="M29.5 49.875C38.6645 49.875 46.0938 42.6976 46.0938 33.8438C46.0938 24.9899 38.6645 17.8125 29.5 17.8125C20.3355 17.8125 12.9062 24.9899 12.9062 33.8438C12.9062 42.6976 20.3355 49.875 29.5 49.875Z" fill="#C0C0C0"/>
                <path d="M29.5 44.5312C29.011 44.5312 28.542 44.3436 28.1963 44.0095C27.8505 43.6755 27.6562 43.2224 27.6562 42.75V40.9688C27.6562 40.4963 27.8505 40.0433 28.1963 39.7092C28.542 39.3752 29.011 39.1875 29.5 39.1875C29.989 39.1875 30.458 39.3752 30.8037 39.7092C31.1495 40.0433 31.3438 40.4963 31.3438 40.9688V42.75C31.3438 43.2224 31.1495 43.6755 30.8037 44.0095C30.458 44.3436 29.989 44.5312 29.5 44.5312Z" fill="#71706F"/>
                <path d="M23.9688 40.9688C23.4798 40.9688 23.0108 40.7811 22.665 40.447C22.3193 40.113 22.125 39.6599 22.125 39.1875V37.4062C22.125 36.9338 22.3193 36.4808 22.665 36.1467C23.0108 35.8127 23.4798 35.625 23.9688 35.625C24.4577 35.625 24.9267 35.8127 25.2725 36.1467C25.6182 36.4808 25.8125 36.9338 25.8125 37.4062V39.1875C25.8125 39.6599 25.6182 40.113 25.2725 40.447C24.9267 40.7811 24.4577 40.9688 23.9688 40.9688Z" fill="#71706F"/>
                <path d="M35.0312 40.9688C34.5423 40.9688 34.0733 40.7811 33.7275 40.447C33.3818 40.113 33.1875 39.6599 33.1875 39.1875V37.4062C33.1875 36.9338 33.3818 36.4808 33.7275 36.1467C34.0733 35.8127 34.5423 35.625 35.0312 35.625C35.5202 35.625 35.9892 35.8127 36.335 36.1467C36.6807 36.4808 36.875 36.9338 36.875 37.4062V39.1875C36.875 39.6599 36.6807 40.113 36.335 40.447C35.9892 40.7811 35.5202 40.9688 35.0312 40.9688Z" fill="#71706F"/>
                </svg>
                    <p className="item-title">{purchase.name}</p>
                </div>

                <p className="item-subtitle">expired {purchase.expirydate}</p>

                <p className="item-text">{purchase.amount} | {purchase.location}</p>
                
            </div>
            );
        })}

        </div>
        </div>
        
    )
}

export default Home;