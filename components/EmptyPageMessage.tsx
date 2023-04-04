import Link from "next/link";

export default function EmptyPageMessage() {
    return (
        <div className='text-center'>
            Nothing to show here. Go to&nbsp;<Link href='/customers/users' className='text-primary-color hover:underline'>Users</Link>,&nbsp;
            <Link href='/customers/users/user-details' className='text-primary-color hover:underline'>User Details</Link>&nbsp;or&nbsp;
            <Link href='/login' className='text-primary-color hover:underline'>Log in</Link>.
        </div>
    );
}