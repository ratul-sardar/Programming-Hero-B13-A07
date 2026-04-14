import banner from "../assets/for404page/404 error with a landscape-cuate.svg";

export default function PageNotFound404() {
  return (
    <section className="">
      <div className="cssContainer min-h-screen ">
        <img
          src={banner}
          alt="404 page bannder"
          className="w-full max-h-[70vh]"
        />
      </div>
    </section>
  );
}
