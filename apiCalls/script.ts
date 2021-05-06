//react typeScript example
const getData = async () => {
    const results = await fetch("https://api.fbi.gov/wanted/v1/list");
    const data = await results.json()
    console.log(data.message);
};

useEffect(()=> {
    getData();
}, []);

//utility to replace fetch
const myFetch = async (url: RequestInfo, info?: RequestInit): Promise<any> => {
    const res = await fetch(url, info);
    const data = await res.json();
    return data;
}

//then 
const getData = async () => {
    const results = myFetch("https://api.fbi.gov/wanted/v1/list");
    console.log(results);
}
