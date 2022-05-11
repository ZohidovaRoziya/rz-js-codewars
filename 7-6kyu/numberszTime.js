function time (sum)
{
    let ocl = parseInt(sum / 3600);
    let min = parseInt((sum % 3600) / 60);
    let sec = ( sum % 3600 ) % 60
    let res = `${String(ocl).padStart(2,0)}:${String(min).padStart(2,0)}:${String(sec).padStart(2,0)}`
    console.log(res);
}
time(4802)