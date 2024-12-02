import { NextResponse } from "next/server";
import { CgFormatLineHeight } from "react-icons/cg";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, ...data } = body;

    console.log("in POST", action)
    // Handle different actions based on the "action" field
    switch (action) {
      case 'register':
        return await handleRegister(data);
      case 'login':
        return await handleLogin(data);
      default:
        return NextResponse.json(
          { message: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

// Function to handle user registration
async function handleRegister({
  nombre_usuario,
  contrasena,
  nombre,
  apellidos,
  correo,
}: any) {
  try {
    console.log("in try catch register")
    const response = await fetch('http://localhost:3001/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellidos, correo, contrasena, nombre_usuario }),
    });

    console.log("response: ",response)
    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ message: 'Registration failed' }, { status: response.status });
    }
  } catch (error) {
    console.error('Error in registration:', error);
    return NextResponse.json({ message: 'Server error during registration' }, { status: 500 });
  }
}

// Function to handle user login
async function handleLogin({ correo, contrasena }: any) {
  

  console.log("in handle login")
  try {
    const response = await fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ correo, contrasena }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ message: 'Login successful' });
    } else {
      return NextResponse.json({ message: 'Login failed' }, { status: response.status });
    }
  } catch (error) {
    console.error('Error in Login:', error);
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
  
}
