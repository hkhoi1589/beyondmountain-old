export default function Stats({ className = "" }) {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <section className={`py-28 ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            Our customers are always happy
          </h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="w-full text-center px-12 py-4 bg-base-300/30 rounded-lg sm:w-auto"
              >
                <h4 className="text-4xl font-semibold">{item.data}</h4>
                <p className="mt-3 opacity-60 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
