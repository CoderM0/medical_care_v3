<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleManager
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next , $role): Response
    {
        if(!Auth::check()){
            return redirect()->route('login');
        }
        $userRole=Auth::user()->role;
        switch($role){
            case 'admin':
                if($userRole==0){
                    return $next($request);
                }
                break;
            case 'doctor':
                if($userRole==1){
                    return $next($request);
                }
                break;
            case 'nurse':
                if($userRole==2){
                    return $next($request);
                }
                break;
            case 'pharma':
                if($userRole==3){
                    return $next($request);
                }
                break;
            case 'patient':
                if($userRole==4){
                    return $next($request);
                }
                break;
            case 'laboratory':
                if($userRole==5){
                    return $next($request);
                }
                break;
          case 'accountant':
                if($userRole==6){
                    return $next($request);
                }
                break;
        }

    switch($userRole){
        case 0:
            return redirect()->route('admin.dashboard');
            break;
        case 1:
            return redirect()->route('doctor.dashboard');
            break;
        case 2:
            return redirect()->route('nurse.dashboard');
            break;
        case 3:
            return redirect()->route('pharma.dashboard');
            break;
        case 4:
            return redirect()->route('patient.dashboard');
            break;
        case 5:
            return redirect()->route('laboratory.dashboard');
            break;
        case 6:
        return redirect()->route('accountant.dashboard');
        break;
    }
    return redirect()->route('login');
    }
}
