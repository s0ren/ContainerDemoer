<?php
$mysqli = new mysqli("db", "user", "pass", "mydb");
if ($mysqli->connect_error) {
  echo "Connection failed: " . $mysqli->connect_error;
} else {
  echo "Connected to MySQL!";
}
