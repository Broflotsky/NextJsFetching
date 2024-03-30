const getTimeZone = async () => {
  const date = await fetch(
    "https://worldtimeapi.org/api/timezone/America/Bogota",
    { next: { revalidate: 10 } }
  );
  const data = await date.json();
  return data;
};

const TimeZone = async () => {
  const { datetime } = await getTimeZone();
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-3xl">{datetime}</h1>
    </div>
  );
};

export default TimeZone;
