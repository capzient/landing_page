import Script from "next/script";
export default function Footer() {
  return (
    <div className=" bg-black text-zinc-50">
      <div className=" divide-fuchsia-600 divide-y-2 divide-dashed">
        <div className="grid grid-cols-6  pt-16">
          <div>
            <ul className="mx-0">
              <li className=" text-4xl   mx-16">Capzient</li>
            </ul>
          </div>
          <div className="col-start-3">
            <ul>
              <li className="font-bold mb-8">Company</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Location</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-8">Legal and Policy</li>
              <li>Privacy Statement</li>
              <li>Terms and Condition</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-8">Services</li>
              <li>Blockchain</li>
              <li>Cloud Computing</li>
              <li>Web 3.0</li>
              <li>Machine Learning</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-8">FOLLOW US</li>

              <li className="grid grid-cols-3 gap-0">
                <span>
                  <ion-icon name="logo-facebook"></ion-icon>{" "}
                </span>

                <span>
                  <ion-icon name="logo-xing"></ion-icon>{" "}
                </span>

                <span>
                  <ion-icon name="logo-instagram"></ion-icon>{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 my-10 p-4 pt-6 pb-6">
          <div>
            <ion-icon name="business-outline"></ion-icon> 2024 Company
          </div>
          <div className="col-start-3">
            <span className="mx-2 ">Term of Services</span>
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">English</span>
            <span className="mx-2">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
            <span className="mx-16">
              <ion-icon name="arrow-up-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <script
          type="module"
          async
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          async
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </div>
    </div>
  );
}
