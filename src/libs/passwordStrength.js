const calculatePasswordStrength = (password) => {
  const strength = {
    0: 'Worst',
    1: 'Bad',
    2: 'Weak',
    3: 'Good',
    4: 'Strong',
  };

  const color = {
    0: 'danger',
    1: 'danger',
    2: 'warning',
    3: 'success',
    4: 'success',
  };

  let score = 0;
  if (password.length > 7) score++;
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[$@#&!]/)) score++;

  return { strength: strength[score], score: score * 25, color: color[score] };
};

export default calculatePasswordStrength;
