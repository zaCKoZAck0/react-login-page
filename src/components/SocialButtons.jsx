import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';

function GoogleButton() {
  return (
    <div className="d-grid">
      <Button
        variant="outline-danger"
        href="https://accounts.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle size={20} style={{ marginRight: '10px' }} />
        Google
      </Button>
    </div>
  );
}

function GithubButton() {
  return (
    <div className="d-grid">
      <Button
        variant="outline-dark"
        href="https://github.com/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} style={{ marginRight: '10px' }} />
        Github
      </Button>
    </div>
  );
}

export default {
  GoogleButton,
  GithubButton,
};
