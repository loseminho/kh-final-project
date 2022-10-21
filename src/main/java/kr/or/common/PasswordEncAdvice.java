package kr.or.common;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class PasswordEncAdvice {
	@Autowired
	private SHA256Util passEnc;
}
