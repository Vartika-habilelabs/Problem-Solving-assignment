function q1(arr,target)
{
  let i=0,j=arr.length-1;
  let res=[];
  while(i<j)
  {
    if(arr[i]+arr[j]===target)
    {
      res.push([arr[i],arr[j]]);
      {i++;j--;}
    }
    else if(arr[i]+arr[j]<target)
    {
      i++;
    }
    else{
      j--;
    }
  }
  return res;
}
console.log(q1([1,2,3,4,5],7));

///////////////////////////////////////////////////////////////////////////

function q2(arr,target)
{
  let diff=Infinity;
  let l=0,r=arr.length-1;
  let res=[];
  while(l<r)
  {
     let sum=arr[l]+arr[r];
     let cdiff=Math.abs(target-sum);
     if(diff>cdiff)
     {
      diff=cdiff;
      res=[arr[l],arr[r]];
     }
     if(sum>target)
     {
      r--;
     }
     else{
      l++;
     }
  }
  return res;
}
console.log(q2([1,2,5,7],))

///////////////////////////////////////////////////////////////////////////
function q3(arr,target)
{
  let i=0,j=arr.length-1;
  let res=[];
  while(i<j)
  {
    if(arr[i]+arr[j]===target)
    {
      res.push([arr[i],arr[j]]);
      j--;
      
    }
    else if(arr[i]+arr[j]<target)
    {
      i++;
    }
    else{
      j--;
    }
  }
  return res;
}
console.log(q3([-2,-1,1,2],0));

///////////////////////////////////////////////////////////////////////////


function q4(arr)
{
  let res=[];
  res.push(arr[0]);
  for(let i=1;i<arr.length;i++)
  {
     while(arr[i]==arr[i-1])i++;
     if(i<arr.length)res.push(arr[i]);
  }
  return res;
}
console.log(q4([1,1,1,1,2,2,2,2,3,3]));

///////////////////////////////////////////////////////////////////////////

function q5(arr,target){
  target=2*target;
  let i=0,j=arr.length-1;
  let res=[];
  while(i<j)
  {
    if(arr[i]+arr[j]===target)
    {
      res.push([arr[i],arr[j]]);
      j--;
    }
    else if(arr[i]+arr[j]<target)
    {
      i++;
    }
    else{
      j--;
    }
  }
  return res;
}
console.log(q5([2,2,4,4,8,8,8,8],8))

///////////////////////////////////////////////////////////////////////////

function q6(s) {
  let mpp = {};
  let start = 0;
  let len = 0;

  for (let i = 0; i < s.length; i++) {
    if (mpp[s[i]] === undefined) {
      mpp[s[i]] = 0;
    }
    mpp[s[i]] += 1;

    if (mpp[s[i]] >= 2) {
      while (start <= i && mpp[s[i]] >= 2) {
        mpp[s[start]] -= 1;
        start++;
      }
    }

    len = Math.max(len, i - start + 1);
  }

  return len;
}

console.log(q6("abcdc")); 

///////////////////////////////////////////////////////////////////////////






