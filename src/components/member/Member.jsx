import Image from "next/image";
import React from "react";

const Member = () => {
  return (
    <section id="memberSection" className="member__wrap section center">
      <h3>오늘의 시인</h3>
      <p>펜촉이 잉크로 촉촉한 시인들을 소개합니다.</p>

      <div className="member__inner container">
        <div className="member">
          <figure className="member__header">
            <Image
              width={300}
              height={400}
              src="/assets/images/member/peep-1.svg"
              alt="멤버"
            />
          </figure>
          <div className="member__body">
            <h4>김덕배</h4>
            <a href="/" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <Image
              width={300}
              height={400}
              src="/assets/images/member/peep-2.svg"
              alt="멤버"
            />
          </figure>
          <div className="member__body">
            <h4>김덕배</h4>
            <a href="/" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <Image
              width={300}
              height={400}
              src="/assets/images/member/peep-3.svg"
              alt="멤버"
            />
          </figure>
          <div className="member__body">
            <h4>김덕배</h4>
            <a href="/" className="btn">
              작품 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
