const fetchingData = async(url:string) => {
    let fetching = await fetch(url)
    let res = await fetching.json()
    return res
}
export default fetchingData