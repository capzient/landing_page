export function Footer() {
  return (
    <div className=" bg-black text-zinc-50">
      <div>
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
              <li className="my-2">Contact Us</li>
              <li className="mb-2">Location</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-8">Legal and Policy</li>
              <li>Privacy Statement</li>
              <li className="my-2">Terms and Condition</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-8">Services</li>
              <li>Blockchain</li>
              <li className="my-2">Cloud Computing</li>
              <li>Web 3.0</li>
              <li className="my-2">Machine Learning</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-8">FOLLOW US</li>

              <li className="flex justify-start">
                <span className="relative">
                  <div className="rounded-full h-8 w-8 bg-gray-400 absolute -top-1.5 -left-2 opacity-50"></div>
                  <ion-icon name="logo-facebook"></ion-icon>{' '}
                </span>

                <span className="mx-8 relative">
                  <div className="rounded-full h-8 w-8 bg-gray-400 absolute -top-1.5 -left-2 opacity-50"></div>
                  <ion-icon name="logo-xing"></ion-icon>{' '}
                </span>

                <span className="mx-2 relative">
                  <div className="rounded-full h-8 w-8 bg-gray-400 absolute -top-1.5 -left-2 opacity-50"></div>
                  <ion-icon name="logo-instagram"></ion-icon>{' '}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 my-10 p-4 pt-6 pb-6 mb-0">
          <div className="mx-16">
            <ion-icon name="business-outline"></ion-icon> 2024 Company
          </div>
          <div className="col-start-3">
            <span className="mx-2 ">Term of Services</span>
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">English</span>
            <span className="mx-2">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
            <span className="mx-8">
              <ion-icon name="arrow-up-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <script type="module" async src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule async src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}
