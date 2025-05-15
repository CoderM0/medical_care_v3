<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $userRole=Auth::user()->role;

        if($userRole==0){
            return redirect()->intended(route('admin.dashboard', absolute: false));
        }else if($userRole==1){
            return redirect()->intended(route('doctor.dashboard', absolute: false));
        }else if($userRole==2){
            return redirect()->intended(route('nurse.dashboard', absolute: false));
        }else if($userRole==3){
            return redirect()->intended(route('pharma.dashboard', absolute: false));
        }else if($userRole==4){
            return redirect()->intended(route('patient.dashboard', absolute: false));
        }else if($userRole==5){
            return redirect()->intended(route('laboratory.dashboard', absolute: false));
        }else{
             return redirect()->intended(route('accountant.dashboard', absolute: false));
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');

    }
}
