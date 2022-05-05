export const KataProfile = async (user = 'wukongsito') => {
  const query = await fetch(`https://www.codewars.com/api/v1/users/${user}`).then(x => x.ok ? x.json() : Promise.reject(x))
  return query
}
