//Jacob Stewart
//Iterative implementation of permutations in JS

//Return an array of all permutations (also array) of an array
//E.G. [ [], [], [] ]
const getpermutations = (array) => {
    let permutationsinprogress = [];
    for (let i = 0; i < array.length; i++) {
        permutationsinprogress.push([array[i]]);
    }

    while (permutationsinprogress[0].length < array.length) {
        let newpermutationsinprogress = [];

        for (let i = 0; i < permutationsinprogress.length; i++) {
            const tmparray = array.concat();

            for (let j = 0; j < permutationsinprogress[i].length; j++) {
                const index = tmparray.indexOf(permutationsinprogress[i][j]);
                tmparray.splice(index, 1);
            }

            for (let j = 0; j < tmparray.length; j++) {
                newpermutationsinprogress.push(permutationsinprogress[i].concat(tmparray[j]));
            }
        }

        permutationsinprogress = newpermutationsinprogress;
        newpermutationsinprogress = [];
    }

    return permutationsinprogress;
}