let reduceHourData = (data) => {
  const currntHour = Number(new Date().getHours().toString());
  let reducedData = data.filter(
    (time) => currntHour <= Number(time.datetime.split(":")[0])
  );

  return reducedData;
};

export { reduceHourData };
