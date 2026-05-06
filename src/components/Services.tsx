import SingleServiceTab, { IServices } from "./SingleServiceTab"

const ServicesMockData: IServices[] = [
    {
        id: 1,
        name: "Landing Page",
        description: "Landing Page - bu bitta sahifadan iborat bo'lgan website bo'lib u asosan instagramda target yoqish uchun va malumotlarni analiz qilish uchun yoki kompaniya haqida qisqa ma'lumot berishda foydalaniladi. Tez yuklanadi va mobile optimized."
    },
    {
        id: 2,
        name: "Web Application",
        description: "Kompleks web ilova ishlab chiqarish - admin panel, CRM, ERP sistemalar. React, Next.js, Node.js kabi zamonaviy texnologiyalar bilan ishlaydi. Masshtablanuvchi va xavfsiz yechimlar."
    },
    {
        id: 3,
        name: "Mobile Application",
        description: "iOS va Android uchun native yoki cross-platform mobil ilovalar. React Native, Flutter bilan ishlaymiz. Offline rejim, push notification va boshqa kuchli xususiyatlar bilan ta'minlangan."
    },
    {
        id: 4,
        name: "UI/UX Design",
        description: "Zamonaviy va foydalanuvchi-markaziy dizayn. Figma, Adobe XD da prototyplar yaratamiz. A/B testing va user research orqali eng yaxshi natija olamiz."
    },
    {
        id: 5,
        name: "E-commerce Solution",
        description: "To'liq ishlab chiqilgan online do'kon - mahsulot katalogi, payment gateway, inventory management. Shopify, WooCommerce yoki custom yechim."
    },
    {
        id: 6,
        name: "API Development",
        description: "RESTful va GraphQL API yaratish. Istalgan dastur bilan integratsiya qilish mumkin. Tez, xavfsiz va to'g'ri dokumentatsiya bilan ta'minlangan."
    },
    {
        id: 7,
        name: "Cloud Solutions",
        description: "AWS, Google Cloud, Azure platformalarida hostingi qilish va saqlash. Automatic backup, scaling va high availability ta'minlanadi."
    },
    {
        id: 8,
        name: "SEO Optimization",
        description: "Google qidiruv natijalarida ustun turishni ta'minlash. Teksti optimizatsiya, backlink strategiyasi va technical SEO."
    },
]


export default function Services() {
    return (
        <div className="min-h-screen py-10">
            <div>
                {
                    ServicesMockData.map((i) => (
                        <SingleServiceTab key={i.id} service={i} />
                    ))
                }
            </div>
        </div>
    )
}
