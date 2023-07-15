const fetchData = async () => {
    const res = await fetch(
      "https://portfolio-api-ashen.vercel.app/user_skills"
      // "https://portfolio-api-159j.onrender.com/user_skills"
    );
    const resultData = (await res.json()) as any;
    return resultData;
  };

  export default fetchData;