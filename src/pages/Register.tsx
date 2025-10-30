import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Tag,
  Github,
  User,
  Phone,
  Calendar as CalendarIcon 
} from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    acceptTerms: false,
    birthday: '',
  });
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>();


  // Password strength calculator
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;

    if (strength <= 1) return { strength: 'Fraca', color: 'text-destructive' };
    if (strength <= 2) return { strength: 'Média', color: 'text-yellow-500' };
    return { strength: 'Forte', color: 'text-accent' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Erro',
        description: 'As senhas não coincidem.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.acceptTerms) {
      toast({
        title: 'Erro',
        description: 'Você deve aceitar os termos de uso.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Conta criada com sucesso!',
        description: 'Bem-vindo ao Opty.',
      });
    }, 1500);
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-subtle'>
      <div className='w-full max-w-md animate-fade-in'>
        {/* Logo */}
        <Link to='/' className='flex items-center justify-center gap-2 mb-8 group'>
          <div className='bg-gradient-primary p-2 rounded-lg shadow-md group-hover:shadow-glow transition-all duration-300'>
            <Tag className='h-6 w-6 text-white' />
          </div>
          <span className='text-2xl font-bold gradient-text'>Opty</span>
        </Link>

        <Card className='glass shadow-xl border-2'>
          <CardHeader className='text-center pb-6'>
            <CardTitle className='text-2xl font-bold'>Criar Conta</CardTitle>
            <CardDescription>
              Junte-se a milhares de usuários que economizam com Opty
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Name Field */}
              <div className='space-y-2'>
                <Label htmlFor='name'>Nome completo</Label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='name'
                    type='text'
                    placeholder='João Silva'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='pl-10'
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className='space-y-2'>
                <Label htmlFor='email'>E-mail</Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='seu@email.com'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='pl-10'
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className='space-y-2'>
                <Label htmlFor='phone'>Telefone</Label>
                <div className='relative'>
                  <Phone className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='(99) 99999-9999'
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className='pl-10'
                    required
                  />
                </div>
              </div>

              {/* Birthday Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Data de Nascimento</label>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        !date && 'text-muted-foreground'
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'dd/MM/yyyy', { locale: ptBR }) : <span>Selecione uma data</span>}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent align="start" className="p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Password Field */}
              <div className='space-y-2'>
                <Label htmlFor='password'>Senha</Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className='pl-10 pr-10'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                  </button>
                </div>
                {formData.password && (
                  <div className='flex items-center gap-2'>
                    <div className='flex-1 h-1.5 bg-muted rounded-full overflow-hidden'>
                      <div
                        className={`h-full transition-all duration-300 ${
                          passwordStrength.strength === 'Fraca'
                            ? 'w-1/3 bg-destructive'
                            : passwordStrength.strength === 'Média'
                            ? 'w-2/3 bg-yellow-500'
                            : 'w-full bg-accent'
                        }`}
                      />
                    </div>
                    <span className={`text-xs font-medium ${passwordStrength.color}`}>
                      {passwordStrength.strength}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>Confirmar senha</Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='confirmPassword'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className='pl-10 pr-10'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {showConfirmPassword ? (
                      <EyeOff className='h-4 w-4' />
                    ) : (
                      <Eye className='h-4 w-4' />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className='flex items-start space-x-2'>
                <Checkbox
                  id='terms'
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptTerms: checked as boolean })
                  }
                />
                <label
                  htmlFor='terms'
                  className='text-sm leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'
                >
                  Aceito os{' '}
                  <a href='#' className='text-primary hover:underline font-medium'>
                    Termos de Uso
                  </a>{' '}
                  e{' '}
                  <a href='#' className='text-primary hover:underline font-medium'>
                    Política de Privacidade
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type='submit'
                variant='gradient'
                className='w-full'
                size='lg'
                disabled={isLoading}
              >
                {isLoading ? 'Criando conta...' : 'Criar Conta'}
              </Button>

              {/* Divider */}
              <div className='relative my-6'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-border' />
                </div>
                <br />
              </div>
            </form>

            {/* Login Link */}
            <div className='mt-6 text-center text-sm'>
              <span className='text-muted-foreground'>Já tem conta? </span>
              <Link to='/login' className='font-medium text-primary hover:underline'>
                Fazer login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
