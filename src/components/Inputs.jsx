import React, { useState } from 'react'
import * as Select from '@radix-ui/react-select';
import { EyeShowIcon, EyeHideIcon, ChevronDownIcon, CheckIcon } from './Icons'

// Name Input
const NameInput = ({ onChange }) => {
  
    const handleChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }
  
    return (
        <>
            <input className='
                px-3.5 py-2.5 rounded-lg 
                border border-solid border-lightgray 
                shadow-sm 
                placeholder:text-md placeholder:text-light-black
                focus:outline-none focus:ring focus:ring-primary-ring focus:border-primary-ring' 
            type="text" 
            placeholder='John Doe' 
            name='name'
            id='name-input'
            onChange={handleChange}/>
        </>
    )
}

// Email Input
const EmailInput = ({ onChange }) => {
  
    const handleChange = (event) => {
      const {name, value} = event.target
      onChange(name, value)
    }
    
    return (
        <>
            <input className='
                px-3.5 py-2.5 rounded-lg 
                border border-solid border-lightgray 
                shadow-sm 
                placeholder:text-md placeholder:text-light-black
                focus:outline-none focus:ring focus:ring-primary-ring focus:border-primary-ring' 
            type="email" 
            placeholder='johndoe@email.com' 
            name='email'
            id='email-input'
            onChange={handleChange}/>
        </>
    )
}

// Password Input
const PasswordInput = ({ onChange }) => {
    const [password, setPassword] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setPassword(value);
      setIsTyping(true);
      onChange(name, value);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const calculatePasswordStrength = () => {
      // Calculate the strength of the password based on your criteria
      // You can implement your own logic here
  
      const passwordStrength = password.length >= 8 ? 'strong' : password.length >= 4 ? 'medium' : 'weak';
      return passwordStrength;
    };

    const getStrengthIndicatorTextColors = () => {
        const passwordStrength = calculatePasswordStrength();
    
        switch (passwordStrength) {
          case 'strong':
            return 'text-green-500';
          case 'medium':
            return 'text-yellow-500';
          case 'weak':
            return 'text-red-500';
          default:
            return 'text-light-black';
        }
    };
  
    const strengthIndicatorTextColor = getStrengthIndicatorTextColors();
    const passwordStrength = calculatePasswordStrength();
  
    return (
      <div className="relative">
        <input
          className="
            w-full px-3.5 py-2.5 
            rounded-lg border border-solid border-lightgray 
            shadow-sm 
            placeholder:text-md placeholder:text-light-black 
            focus:outline-none focus:ring focus:ring-primary-ring focus:border-primary-ring"
          type={showPassword ? 'text' : 'password'}
          placeholder="at least 8 characters"
          name="password"
          id="password-input"
          value={password}
          onChange={handleChange}
        />
        <button
          type="button"
          className="absolute top-6 right-3 transform -translate-y-1/2 focus:outline-none cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeHideIcon /> : <EyeShowIcon />}
        </button>
        {isTyping && password !== '' && 
            <div className={`mt-2 text-sm ${strengthIndicatorTextColor}`}>
                {passwordStrength === 'strong' && 'Strong Password'}
                {passwordStrength === 'medium' && 'Medium Password'}
                {passwordStrength === 'weak' && 'Weak Password'}
            </div>}
      </div>
    );
};

// Phone Number Input
const countryCodes = [
    { label: 'United States (+1)', value: '+1', flag: '🇺🇸' },
    { label: 'India (+91)', value: '+91', flag: '🇮🇳' },
    { label: 'United Kingdom (+44)', value: '+44', flag: '🇬🇧' },
    { label: 'Germany (+49)', value: '+49', flag: '🇩🇪' },
    { label: 'Australia (+61)', value: '+61', flag: '🇦🇺' },
    { label: 'France (+33)', value: '+33', flag: '🇫🇷' },
    { label: 'Japan (+81)', value: '+81', flag: '🇯🇵' },
    { label: 'Brazil (+55)', value: '+55', flag: '🇧🇷' },
    { label: 'China (+86)', value: '+86', flag: '🇨🇳' },
    { label: 'Canada (+1)', value: '+1', flag: '🇨🇦' },
    { label: 'Mexico (+52)', value: '+52', flag: '🇲🇽' },
    { label: 'Spain (+34)', value: '+34', flag: '🇪🇸' },
    { label: 'Italy (+39)', value: '+39', flag: '🇮🇹' },
    { label: 'Russia (+7)', value: '+7', flag: '🇷🇺' },
    { label: 'South Korea (+82)', value: '+82', flag: '🇰🇷' },
    // Add more popular countries with their codes and flags
];


const PhoneNumberInput = ({ onChange }) => {
  const [selectedCountryCode, setSelectedCountryCode] = React.useState(`${countryCodes[1].flag} (${countryCodes[1].value})`);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handlePhoneNumberChange = (event) => {
    const { name, value } = event.target;
    setPhoneNumber(event.target.value);
    onChange(name, value);
  };

  return (
       <div className='flex'>
            <Select.Root value={selectedCountryCode} onValueChange={setSelectedCountryCode}>
                <Select.Trigger className="
                    inline-flex items-center justify-center 
                    px-2 h-[46px] 
                    text-left bg-off-white 
                    border border-solid border-lightgray border-r-1 
                    rounded-l-lg 
                    shadow-sm 
                    cursor-default outline-none"
                >
                    <Select.Value aria-label={selectedCountryCode} >
                        {selectedCountryCode}
                    </Select.Value>
                    <Select.Icon className="ml-1 w-4 h-4">
                    <ChevronDownIcon />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="
                        h-[200px] py-2 bg-white 
                        rounded-md shadow-sm 
                        border border-solid border-lightgray" 
                    position="popper" 
                    sideOffset={5}
                    >
                        <Select.Viewport>
                                {countryCodes.map((option, index) => (
                                <Select.Item
                                    key={index}
                                    value={ `${option.flag} (${option.value})` }
                                    className="outline-none flex justify-between items-center text-sm text-dark-black-black py-2 px-2 cursor-pointer hover:bg-secondary"
                                >
                                    <Select.ItemText>
                                        {option.flag} {option.label}
                                    </Select.ItemText>
                                    <Select.ItemIndicator className="w-5 h-5">
                                        <CheckIcon />
                                    </Select.ItemIndicator>
                                </Select.Item>
                                ))}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>

            <input
                className="
                    flex-grow px-3.5 py-2.5
                    rounded-r-lg border border-solid border-lightgray border-l-0
                    shadow-sm
                    placeholder:text-md placeholder:text-light-black outline-none"
                id='phone-number-input'
                name='phone'
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="999 000 0000"
            />
       </div>
  );
};

export { NameInput, EmailInput, PasswordInput, PhoneNumberInput }