const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

const solution = (clothes) => {
  const mappedClothes = new Map();

  for (const [, type] of clothes) {
    mappedClothes.set(type, (mappedClothes.get(type) ?? 0) + 1);
  }

  let answer = 1;
  for (const count of mappedClothes.values()) {
    answer *= count + 1;
  }

  return answer - 1;
};

solution(clothes);