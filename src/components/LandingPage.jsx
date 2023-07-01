import React from "react";
// import Button from "./Button";
// import Image from "./Image";

function LandingPage() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Welcome to Our Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse at tellus eu lectus commodo molestie ut non lectus.
                Donec interdum ligula in mi maximus, vitae varius lorem commodo.
              </p>
              {/* <Button text="Start Now" /> */}
            </div>
            <div className="col">
              {/* <Image src="path/to/image" alt="Image" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>{/* Add content for the second section */}</section>

      {/* Section 3 */}
      <section>{/* Add content for the third section */}</section>
    </div>
  );
}

export default LandingPage;
