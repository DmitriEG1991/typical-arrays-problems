exports.min = function min(array=0) {
  if(array == 0){
    return 0;
  }else{
    return Math.min.apply(null, array);
  }
}

exports.max = function max(array=0) {
  if(array == 0){
    return 0;
  }else{
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg(array=0) {
  if(array == 0){
    return 0;
  }else{
    let summ = 0;
    for(i=0; i<array.length; i++){
      summ += array[i];
    }
    return summ/array.length;
  }
}
