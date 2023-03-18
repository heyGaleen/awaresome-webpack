export function quickSort(A,p=0,r=A.length) {
  if (p < r-1) {
    let q = divide(A,p,r)
    quickSort(A,p,q)
    quickSort(A,q+1,r)
  }
  return A
}

function divide(A,p,r) {
  const pivot = A[r-1]
  let i = p-1
  let j = i+1
  while(j<r-1) {
    if (A[j] <= pivot) {
      i++
      [A[i],A[j]] = [A[j],A[i]]
    }
    j++
  }
  [A[i+1],A[r-1]] = [A[r-1],A[i+1]]
  return i
}