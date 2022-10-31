package kr.or.common;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import kr.or.member.model.vo.Member;

@Component
@Aspect
public class PasswordEncAdvice {
	@Autowired
	private SHA256Util passEnc;
	@Pointcut(value="execution(* kr.or.member.model.service.MemberService.*Enc(..))")
	public void encPointcut() {}
	
	@Before(value="encPointcut()")
	public void passwordEnc(JoinPoint jp) throws Exception{
		Object[] args = jp.getArgs();
		Member m = (Member)args[0];
		if(m.getMemberPw() != null) {
			String encPw = passEnc.encData(m.getMemberPw());
			m.setMemberPw(encPw);			
		}
	}
}
